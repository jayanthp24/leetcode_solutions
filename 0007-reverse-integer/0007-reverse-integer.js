/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let neg = false;
    let res = 0;
    if(x < 0) {
        neg = true;
        x = Math.abs(x);
    }
    while(x > 0) {
        let ld = x % 10;
        res = (res * 10) + ld;
        x = Math.floor(x/10);
    }
    let limit = Math.pow(2,31);
    if(res < -limit || res > limit) return 0;
    return (neg) ? -res : res;
};