let input = documemt.querySelector('.container-check');
let button = document.querySelector('.button');
let taskContaner = document.quarySelector('.container-tasks');
let sort = document.quarySelector('.container-list');
let tasks = [];

button.addEventListener('click', () => {
    if(input.value !== '') {
        let div = document.createElement('div');
        div.classList.add('li')
        div.textContent = input.value
        console.log(input.value)
        tasks.push(input.value)
        console.log(tasks)

        refreshTasks(tasks)
        input.value = "";
    }
});


function refreshTasks(tasks) {
    taskContainer.innerHTML = ''

    tasks.forEach(item) => { //перебрать массив
        let div = document.createElement('div');
        div.textContent = item //ввод строки
        taskContainer.append(div)
        let close = document.createElement('img') //крестик
        close.classList.add('close')
        close.src = 'добавить картинки-56'
        div.append(close)

        close.addEventListener('click' () => {
            tasks = tasks.filter((item) =>
            return div.textContent !== item;
        });
        console.log(tasks);
        refreshTasks(tasks);
        });
    })
}

function clickImage () {
    sort.addEventListener('mouseover', () => {
        sort.src = (sort.src == windiw.location.origin + '/images/srtUpGray.svg') ? 'images/strDownGray.svg': 'images/strDownGray.svg'
    });
}
sorAddEventListener('click',() => {
     sort.src = (sort.src == window.location.origin + '/images/strDownvlack.svg') ? 'images/strUpgrey.svg' : 'images/strDownGray.svg'
});
 sort.addEventListener('mouseout',() => {
    sort.src = (sort.src == 'images/strDownblack.svg') ? 'images/StrUpgray.svg' : 'images/strDownGray.svg';
})
sort.addEventListener('mouseout', () => {
if ()
sort.src = (sort.src == ) ? 'images/strUpgrey.svg' : 'images/StrDownGray.svg'
})
}

sort.addEventListener ('click' , function () {

    if (sort.src == window.location.origin + '/images/strDownblack.svg') {
        tasks.sort((a,b) => {
            if(a > b) {
                return -1;
            } if (b > a) {
                return 1;
            }
        });

        sort.src = window.location.origin + 'images/strUpBlack.svg'
    } else {
        tasks.sort((a,b) => {
            if(a < b) {
                return -1;
            }if(b < a) {
                return 1;
            }
        });
        sortsrc = window.location.origin + '/images/strDownblack.svg'
    }
    refreshTasks(tasks)
})
