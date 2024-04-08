import type {
  FixedNumberExpression,
  RGBAColorValue,
  ColorExpression,
  NumberExpression,
  GradientColor,
  GradientStop,
  FixedVec3Expression,
  vec4,
  vec3,
  vec2,
} from '../src';
import { ValueType, ParticleOrigin } from '../src';
import { v4 as uuidV4 } from 'uuid';

export function arrAdd<T> (arr: T[], item: T): boolean | undefined {
  if (!arr.includes(item)) {
    arr.push(item);

    return true;
  }
}

/**
 * @deprecated 请直接使用 Array.prototype.forEach 或 for...of
 * @param object
 * @param callback
 * @returns the mutated input object
 */
export function forEach<T> (object: null | undefined | { [key: string]: T | Record<any, T> }, callback: (val: T, key: string) => void, thisObj?: any) {
  if (object) {
    for (const name in object) {
      if (Object.hasOwnProperty.call(object, name)) {
        callback.call(thisObj, object[name] as T, name);
      }
    }
  }

  return object;
}

export function ensureFixedNumber (a: any): FixedNumberExpression | undefined {
  if (Number.isFinite(a)) {
    return [ValueType.CONSTANT, a];
  }
  if (a) {
    if (a[0] === 'lines') {
      return [ValueType.LINE, a[1]];
    }
    if (a[0] === 'curve') {
      return [ValueType.CURVE, a[1]];
    }
    if (a[0] === 'static') {
      return [ValueType.CONSTANT, a[1]];
    }
  }
}

export function ensureFixedNumberWithRandom (a: any, p: number): FixedNumberExpression | undefined {
  if (Array.isArray(a) && a[0] === 'random') {
    return [ValueType.CONSTANT, a[1][p]];
  }

  return ensureFixedNumber(a);
}

export function ensureRGBAValue (a: any): RGBAColorValue {
  if (a && a[0] === 'color') {
    return colorToArr(a[1], true);
  }

  return [1, 1, 1, 1];
}

export function ensureColorExpression (a: any, normalized?: boolean): ColorExpression | undefined {
  if (a) {
    if (a[0] === 'colors') {
      return [ValueType.COLORS, a[1].map((color: any) => colorToArr(color, normalized))];
    } else if (a[0] === 'gradient') {
      return ensureGradient(a[1], normalized);
    } else if (a[0] === 'color') {
      return [ValueType.RGBA_COLOR, colorToArr(a[1], normalized)];
    }
  }
}

export function ensureNumberExpression (a: any): NumberExpression | undefined {
  if (a && a[0] === 'random') {
    return [ValueType.RANDOM, a[1]];
  }

  return ensureFixedNumber(a);
}

export function ensureValueGetter (a: any): NumberExpression | any {
  if (Array.isArray(a) && typeof a[0] === 'string') {
    return ensureNumberExpression(a) || ensureFixedVec3(a) || ensureColorExpression(a) || a;
  }

  return a;
}

export function ensureGradient (a: any, normalized?: boolean): GradientColor | undefined {
  if (a) {
    let stops: GradientStop[] = [];

    Object.getOwnPropertyNames(a).forEach(p => {
      const stop = parsePercent(p);
      const color = colorToArr(a[p], normalized);

      stops.push([stop, color[0], color[1], color[2], color[3]]);
    });
    stops = stops.sort((a, b) => a[0] - b[0]);

    return [ValueType.GRADIENT_COLOR, stops];
  }
}

export function colorToArr (hex: string | number[], normalized?: boolean): vec4 {
  let ret: vec4;

  if (typeof hex === 'string') {
    hex = hex.replace(/[\s\t\r\n]/g, '');
    let m = /rgba?\(([.\d]+),([.\d]+),([.\d]+),?([.\d]+)?\)/.exec(hex);

    if (m) {
      const a = +m[4];

      ret = [+m[1], +m[2], +m[3], isNaN(a) ? 255 : Math.round(a * 255)];
    } else if (/^#[a-f\d]{3}$/i.test(hex)) {
      ret = [parseInt(hex[1] + hex[1], 16), parseInt(hex[2] + hex[2], 16), parseInt(hex[3] + hex[3], 16), 255];
      // eslint-disable-next-line no-cond-assign
    } else if (m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)) {
      ret = [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16), 255] || [0, 0, 0, 255];
    }
  } else if (hex instanceof Array) {
    ret = [hex[0], hex[1], hex[2], isNaN(hex[3]) ? 255 : Math.round(hex[3] * 255)];
  }

  if (normalized) {
    // @ts-expect-error
    ret = normalizeColor(ret) as unknown as vec4;
  }

  // @ts-expect-error
  return ret;
}

export function normalizeColor (a: number[]): number[] | undefined {
  if (Array.isArray(a)) {
    return a.map(i => Number.isFinite(i / 255) ? Number((i / 255).toFixed(6)) : 0);
  }
}

export function parsePercent (c: string): number {
  const match = /^(-)?([\d+.]+)%$/.exec(c);

  if (match) {
    return +match[2] / 100 * (match[1] ? -1 : 1);
  }

  return +c;
}

export function getGradientColor (color: string | Array<string | number[]>, normalized?: boolean): GradientColor | undefined {
  if (Array.isArray(color)) {
    // @ts-expect-error
    return (color[0] === 'gradient' || color[0] === 'color') && ensureGradient(color[1], normalized);
  } else {
    return ensureGradient(color, normalized);
  }
}

export function ensureFixedVec3 (a: any): FixedVec3Expression | undefined {
  if (a) {
    if (a.length === 3) {
      return [ValueType.CONSTANT_VEC3, a];
    }
    if (a[0] === 'path') {
      return [ValueType.LINEAR_PATH, a[1]];
    }
    if (a[0] === 'bezier') {
      return [ValueType.BEZIER_PATH, a[1]];
    }
  }
}

export function objectValueToNumber (o: Record<string, any>): object {
  for (const key of Object.keys(o)) {
    o[key] = Number(o[key]);
  }

  return o;
}

export function deleteEmptyValue (o: Record<string, any>): object {
  for (const key of Object.keys(o)) {
    if (o[key] === undefined) {
      delete o[key];
    }
  }

  return o;
}

const cos = Math.cos;
const sin = Math.sin;
const d2r = Math.PI / 180;
const r2d = 180 / Math.PI;

export function quatFromXYZRotation (out: vec4 | number[], x: number, y: number, z: number): vec4 {
  const c1 = cos((x * d2r) / 2);
  const c2 = cos((y * d2r) / 2);
  const c3 = cos((z * d2r) / 2);

  const s1 = sin((x * d2r) / 2);
  const s2 = sin((y * d2r) / 2);
  const s3 = sin((z * d2r) / 2);

  out[0] = s1 * c2 * c3 + c1 * s2 * s3;
  out[1] = c1 * s2 * c3 - s1 * c2 * s3;
  out[2] = c1 * c2 * s3 + s1 * s2 * c3;
  out[3] = c1 * c2 * c3 - s1 * s2 * s3;

  return out as vec4;
}

function clamp (v: number, min: number, max: number): number {
  return v > max ? max : (v < min ? min : v);
}

export function rotationZYXFromQuat (out: vec3 | number[], quat: vec4): vec3 {
  const x = quat[0];
  const y = quat[1];
  const z = quat[2];
  const w = quat[3];
  const x2 = x + x;
  const y2 = y + y;
  const z2 = z + z;
  const xx = x * x2;
  const yx = y * x2;
  const yy = y * y2;
  const zx = z * x2;
  const zy = z * y2;
  const zz = z * z2;
  const wx = w * x2;
  const wy = w * y2;
  const wz = w * z2;
  const m11 = 1 - yy - zz, m12 = yx - wz, m13 = zx + wy;
  const m21 = yx + wz, m22 = 1 - xx - zz, m23 = zy - wx;
  const m31 = zx - wy, m32 = zy + wx, m33 = 1 - xx - yy;

  out[1] = Math.asin(clamp(-m31, -1, 1)) * r2d;
  if (Math.abs(m31) < 0.9999999) {
    out[0] = Math.atan2(m32, m33) * r2d;
    out[2] = Math.atan2(m21, m11) * r2d;
  } else {
    out[0] = 0;
    out[2] = Math.atan2(-m12, m22) * r2d;
  }

  return out as vec3;
}

export function generateGUID (): string {
  return uuidV4().replace(/-/g, '');
}

/**
 * 提取并转换 JSON 数据中的 anchor 值
 */
export function convertAnchor (anchor?: vec2, particleOrigin?: ParticleOrigin): vec2 {
  if (anchor) {
    return [anchor[0] - 0.5, 0.5 - anchor[1]];
  } else if (particleOrigin) {
    return particleOriginTranslateMap[particleOrigin];
  } else {
    return [0, 0];
  }
}

export const particleOriginTranslateMap: Record<number, vec2> = {
  [ParticleOrigin.PARTICLE_ORIGIN_CENTER]: [0, 0],
  [ParticleOrigin.PARTICLE_ORIGIN_CENTER_BOTTOM]: [0, -0.5],
  [ParticleOrigin.PARTICLE_ORIGIN_CENTER_TOP]: [0, 0.5],
  [ParticleOrigin.PARTICLE_ORIGIN_LEFT_TOP]: [-0.5, 0.5],
  [ParticleOrigin.PARTICLE_ORIGIN_LEFT_CENTER]: [-0.5, 0],
  [ParticleOrigin.PARTICLE_ORIGIN_LEFT_BOTTOM]: [-0.5, -0.5],
  [ParticleOrigin.PARTICLE_ORIGIN_RIGHT_CENTER]: [0.5, 0],
  [ParticleOrigin.PARTICLE_ORIGIN_RIGHT_BOTTOM]: [0.5, -0.5],
  [ParticleOrigin.PARTICLE_ORIGIN_RIGHT_TOP]: [0.5, 0.5],
};