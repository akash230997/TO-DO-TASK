console.log('Working!!');

let addbtnIcon = document.getElementById('addbtnIcon');
// let slot = document.getElementById('slot');
let head = document.getElementById('heading');


addbtnIcon.addEventListener('click',()=>{
    let popbox = document.createElement('div');
    let h2heading = document.createElement('h2');
    let inputValues = document.createElement('input');
    let addEle = document.createElement('button');
    let removeEle = document.createElement('button');

    popbox.classList.add('popEle');
    h2heading.innerHTML = `<h2>ADD ITEM</h2>`;
    inputValues.type = 'text';
    inputValues.placeholder = `ENTER YOUR TASK HERE!!!`;
    inputValues.classList = `inp`;
    addEle.classList.add('btn1');
    removeEle.classList.add('btn2');
    addEle.innerHTML = 'ADD';
    removeEle.innerHTML = 'CLOSE';
    let sloting = document.querySelector('#slot');
    sloting.append(popbox);
    popbox.append(h2heading, inputValues, addEle, removeEle);

    let wrapper = document.querySelector('#wrapper');
    wrapper.style.filter = 'blur(5px)';
    

    removeEle.addEventListener('click',()=>{
        sloting.removeChild(popbox);
        wrapper.style.filter = 'none';
    });

    addEle.addEventListener('click',()=>{
        //Input VALUE :
        let valueinp = inputValues.value;

        sloting.removeChild(popbox);
        wrapper.style.filter = 'none';

        let noItemTag = document.querySelector("#noItemTag");
        noItemTag.innerHTML = "";


        if (valueinp =="") {
            alert('Please Enter Your Task!!')
        }else {
            let TaskList = document.createElement('div');
            let h3heading = document.createElement('h3');
            let hr = document.createElement('hr');
            let MidBlock = document.createElement('div');
            let footerList = document.createElement('div');
            MidBlock.classList.add('MidBlock');
            footerList.classList.add('footerList');

            TaskList.className = 'TaskBox';

            h3heading.innerHTML = valueinp;
            h3heading.classList.add('h3D')
            TaskList.appendChild(h3heading);
            TaskList.appendChild(hr);


            let Task = document.getElementById('Task');

            Task.appendChild(TaskList);
            TaskList.append(MidBlock);
            TaskList.append(footerList);

            let trash = document.createElement('span');
            // add.classList.add('footAdd')
            footerList.appendChild(trash);
            trash.innerHTML = `<i class="fas fa-trash-alt footAdd"></i>`

            let add = document.createElement('span');
            // add.classList.add('footAdd')
            footerList.appendChild(add);
            add.innerHTML = `<i class="fas fa-plus-circle footAdd"></i>`

            //addInner
            add.addEventListener('click',()=>{
                wrapper.style.filter = 'blur(5px)';

                let innerPopUp = document.createElement('div');
                innerPopUp.classList.add('popEle');
                
                let h2headingInner = document.createElement('h2');
                h2headingInner.innerHTML = `<h2>ADD ITEM</h2>`;

                let inputValuesInner = document.createElement('input');
                inputValuesInner.type = 'text';
                inputValuesInner.placeholder = `ENTER YOUR TASK HERE!!!`;
                inputValuesInner.classList = `inp`;

                let addEleInner = document.createElement('button');
                addEleInner.classList.add('btn1');
                addEleInner.innerHTML = 'ADD';

                let closeEleInner = document.createElement('button');
                closeEleInner.classList.add('btn2');
                closeEleInner.innerHTML = 'CLOSE';

                slot.append(innerPopUp);
                innerPopUp.append(h2headingInner, inputValuesInner, addEleInner, closeEleInner);

                closeEleInner.addEventListener('click', () => {
                    sloting.removeChild(innerPopUp);
                    wrapper.style.filter = 'none';
                });
                
                addEleInner.addEventListener('click',()=>{
                    let innerValue = inputValuesInner.value;
                    if (innerValue == ""){
                        alert('Please Enter Your Task!!')
                    }else{
                        wrapper.style.filter = 'none';
                        sloting.removeChild(innerPopUp);
                        
                        let taskStoreP = document.createElement('div');
                        let cancelTask = document.createElement('button');
                        cancelTask.classList.add('cancelTask');
                        cancelTask.innerText = 'COMPLETED';

                        taskStoreP.classList.add('taskStoreP');
                        taskStoreP.innerText = innerValue;
                        MidBlock.appendChild(taskStoreP);
                        taskStoreP.append(cancelTask);
                        // MidBlock Line-Through
                        cancelTask.addEventListener('click', () => {
                            taskStoreP.style.textDecoration = 'line-through';
                            taskStoreP.style.color = 'red';
                            taskStoreP.removeChild(cancelTask);
                        })
                    }
                });
            });
            //Remove Task: FOOTER
            trash.addEventListener('click',()=>{
                let Task = document.querySelector('#Task');
                Task.removeChild(TaskList);
                // TaskList.innerHTML ="";
            });
            // PAGE 2 
            h3heading.addEventListener('click',()=>{
                wrapper.style.visibility ='hidden';
                page2.style.visibility='visible';
                // page2.innerText ='HelloWorld!!';
                addbtnIcon.style.visibility = 'visible';
                let p2Container = document.createElement('div');
                p2Container.classList.add('p2Container')
                page2.appendChild(p2Container);
                let backbtn = document.createElement('span');
                backbtn.classList.add('backbtn')
                backbtn.innerHTML = '<i class="fas fa-arrow-circle-left"></i> BACK';
                p2Container.appendChild(backbtn);
                let headingp2 = document.createElement('h1');
                headingp2.classList.add('headingp2');
                headingp2.innerText = valueinp;
                p2Container.append(headingp2);
                
                p2Container.append(TaskList);
                TaskList.classList.add('page2LayOut')
                // CALLING BACK TO MAINPAGE
                backbtn.addEventListener('click',()=>{
                    p2Container.removeChild(backbtn, headingp2, TaskList)
                    page2.style.visibility ='hidden';
                    wrapper.style.visibility = 'visible';
                    p2Container.remove(TaskList);

                    TaskList.classList.remove('page2LayOut')
                    Task.append(TaskList)
                });
                trash.addEventListener('click',()=>{
                    p2Container.removeChild(backbtn, headingp2, TaskList)
                    page2.style.visibility = 'hidden';
                    wrapper.style.visibility = 'visible';
                    p2Container.remove(TaskList);

                    TaskList.classList.remove('page2LayOut')
                })
            })
            
        }
    });
});

















// addbtnID.addEventListener('click',function(){
//     head.style.filter = "blur(5px)"
//     const popElement = document.createElement('div')
//     popElement.setAttribute('class','popEle')
//     let popUpProperties = `
//         <center><h2>ADD ITEM</h2></center>
//         <input type="text" class="inp" placeholder="Add New List">
//         <button id="btn1" class="btn1">ADD</button>
//         <button class="removeEle" id="removeEle">CLOSE</button>`;
//     popElement.insertAdjacentHTML("afterbegin", popUpProperties);
//     console.log(popElement);
//     slot.appendChild(popElement);

//     // CLOSE BUTTON VALUE:
//     const ClosebtnTwo = document.getElementById('removeEle');
//     console.log(ClosebtnTwo);
//     // ADD BUTTON VALUE:
//     const Addbtn = document.getElementById('btn1');
//     console.log(Addbtn);

//     ClosebtnTwo.addEventListener('click', function () {
//         head.style.filter = "none"
//         slot.remove(popElement)
//         popElement.splice(index, 1)
//     })
// });


// ClosebtnTwo.addEventListener('click', function () {
//     const x = document.querySelector(".parent");
//     if (x.style.display == 'none') {
//         x.style.display = 'block'
//     } else {                                                //Making toggle Button
//         x.style.display = 'none'
//     }
// });


