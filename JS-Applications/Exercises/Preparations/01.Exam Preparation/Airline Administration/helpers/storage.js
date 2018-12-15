const storage = function () {
    const appKey = 'kid_HJywlqzx4';
    const appSecret = 'd129879976d44d108c797a55d113a190';

    const saveData = function (key, value) {
        localStorage.setItem(appKey + key, JSON.stringify(value));
    };

    const getData = function (key) {
        return JSON.parse(localStorage.getItem(appKey + key));
    };

    const deleteData = function(key) {
        localStorage.removeItem(appKey + key);
    };

    const saveUser = function(data){
        saveData('userInfo', {
            id: data._id,
            username: data.username
        });

        saveData('authToken', data._kmd.authtoken);
    };

    const deleteUser = function(){
        deleteData('authToken');
        deleteData('userInfo');
    };

    return {
        saveData,
        getData,
        deleteData,
        appKey,
        appSecret,
        saveUser,
        deleteUser
    };
}();