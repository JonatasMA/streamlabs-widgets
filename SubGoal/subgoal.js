// Events will be sent when someone followers
// Please use event listeners to run functions.

document.addEventListener('goalLoad', function (obj) {
    // obj.detail will contain information about the current goal
    // this will fire only once when the widget loads
    console.log(obj.detail);
    $('#title').html(obj.detail.title);
    $('#goal-current').text(obj.detail.amount.current);
    $('#goal-total').text(obj.detail.amount.target);
    $('#goal-end-date').text(obj.detail.to_go.ends_at);
    const goalPercent = ((100 / obj.detail.amount.target) * obj.detail.amount.current).toFixed(0);
    document.getElementById('goal-percent').innerText = goalPercent;
    document.getElementById('goal-bar').style.width = `${goalPercent}%`;
});

document.addEventListener('goalEvent', function (obj) {
    // obj.detail will contain information about the goal
    console.log(obj.detail);
    $('#goal-current').text(obj.detail.amount.current);
    const goalPercent = ((100 / obj.detail.amount.target) * obj.detail.amount.current).toFixed(0);
    document.getElementById('goal-percent').innerText = goalPercent;
    document.getElementById('goal-bar').style.width = `${goalPercent}%`;
});