import Socket from './socket';
import clipboard from './clipboard';
import sound from '../common/sound';
import crypto from './crypto';
import EventEmitter from './event-emitter';
import env from './env';
import ui from './ui';
import dialog from './dialog';
import notify from './notify';
import config from '../common/config';
import net from './net';
import setting from './setting';

/**
 * 浏览器平台上所有可用的模块
 */
export default {
    type: 'browser',
    setting,
    Socket,
    clipboard,
    crypto,
    EventEmitter,
    env,
    ui,
    notify,
    config,
    sound,
    net,
    dialog,
};
