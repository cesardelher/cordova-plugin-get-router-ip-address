RouterIpAddress = {
    getRouterIPAddress: function() {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "GetRouterIPAddress", "getRouterIPAddress", []);
        });
    }
}

module.exports = RouterIpAddress;