/**
 * 销毁
 */
export const END_BEHAVIOR_DESTROY = 0;
/**
 * 暂停
 * @deprecated since 2.0 - use `END_BEHAVIOR_FREEZE` instead
 */
export const END_BEHAVIOR_PAUSE = 1;
/**
 * 无限播放
 */
export const END_BEHAVIOR_FORWARD = 2;
/**
 * 销毁并保留最后一帧
 * @deprecated since 2.0
 */
export const END_BEHAVIOR_PAUSE_AND_DESTROY = 3;
/**
 * 冻结
 */
export const END_BEHAVIOR_FREEZE = 4;
/**
 * 重播
 */
export const END_BEHAVIOR_RESTART = 5;
/**
 *
 */
export const END_BEHAVIOR_DESTROY_CHILDREN = 6;

export const CAMERA_CLIP_MODE_VERTICAL = 1;
export const CAMERA_CLIP_MODE_NORMAL = 0;

/**
 * 消息开始
 */
export const MESSAGE_ITEM_PHRASE_BEGIN = 2;
/**
 * 消息结束
 */
export const MESSAGE_ITEM_PHRASE_END = 1;
