"use strict";

export default function(){

    var calAllChangeCheckbox = document.getElementsByName('calAllChangeCheckbox')[0];
    var allset = document.getElementsByName('allset');
    var allChangeBtn = document.getElementsByName('allChangeBtn')[0];
    var allChangeSelect = document.getElementsByName('allChangeSelect')[0];


    calAllChangeCheckbox.addEventListener('change',function(event){
        if(calAllChangeCheckbox.checked){
            console.log('チェックされました');
            checkAddAction();
        }else{
            console.log('チェック解除されました');
            checkRemoveAction();
        }
    });

    allChangeBtn.addEventListener('click', function(){
        var data = allChangeSelect.value;
        allChangeFunc(data);
    });

    var checkAddAction = () => {
        for(let i = 0; i < allset.length; i++){
            allset[i].checked = true;
        }
    }

    var checkRemoveAction = () => {
        for(let i = 0; i < allset.length; i++){
            allset[i].checked = false;
        }
    }

    var allChangeFunc = (data) => {
        for(let i = 0; i < allset.length; i++){
            if(allset[i].checked){
                var parent = allset[i].parentNode;
                var selectBtn = parent.querySelector('select');
                var options = selectBtn.options;
                
                for(let n = 0; n < options.length; n++){
                    if(options[n].value == data){
                        options[n].selected = true;
                    }else{
                        options[n].selected = false;
                    }
                }
            }
        }

    }

}