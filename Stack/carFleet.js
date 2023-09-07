var carFleet = function(target, position, speed) {
    // create new arr with pos and speed as tuple
    const pos_arr = position.map((pos,idx) => [pos, speed[idx]]);
    //  sort in reverse order
    pos_arr.sort((posA, posB) => posB[0] - posA[0]);
    const stack = [];

    for (let i = 0; i < pos_arr.length; i++) {
        let [pos,speed] = pos_arr[i];
        console.log(pos)
        console.log(speed)
        let time = (target - pos) / speed;

        if (stack.length === 0) stack.push(time);
        if (time > stack[stack.length - 1]) stack.push(time);
    };

    return stack.length;

};