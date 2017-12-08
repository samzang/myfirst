/**
 * Created by zhangshexin on 2017/11/24.
 */
'use strict'
import storage from 'react-native-simple-store';

export default class StorageManage {

    static getUserInfo() {
        return storage.get("user").then((user) => {
            return Promise.resolve(user.info);
        }).catch(err => {
            return Promise.reject(err);
        })
    }

    static saveUserInfo(userInfo) {
        return storage.save('user', {
            // isLogined: true,
            info: userInfo
        });
    }
}