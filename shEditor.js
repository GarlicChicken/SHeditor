const shStyle = document.createElement('link');
shStyle.rel = "stylesheet";
shStyle.href = "style.css";
document.getElementsByTagName('head')[0].appendChild(shStyle);

const shfontAwesome = document.createElement('link');
shfontAwesome.rel = "stylesheet"
shfontAwesome.href = "https://use.fontawesome.com/releases/v5.0.12/css/all.css";
document.getElementsByTagName('head')[0].appendChild(shfontAwesome);

const shEditorForm =`
<div id="shEditor">
    <div id="shEditorMenu">

        <!-- 폰트 스타일 -->
        <span class="shBtnGroup">
            <button type="button" class="shBtn" style="font-weight: bold" onclick="btnAction('bold')">B</button>
            <button type="button" class="shBtn" style="font-style: italic" onclick="btnAction('italic')">I</button>
            <button type="button" class="shBtn" style="text-decoration: underline" onclick="btnAction('Underline')">abc</button>
            <button type="button" class="shBtn" style="text-decoration: line-through" onclick="btnAction('StrikeThrough')">abc</button>
        </span>

        <!-- 글꼴 -->
        <select class="dropdownMenu" onchange="btnAction(this.value, 'fontName')">
            <option value='Dotum' style="font-family:Dotum">돋움</option>
            <option value='DotumChe' style="font-family:DotumChe">돋움체</option>
            <option value='Batang' style="font-family:Batang">바탕</option>
            <option value='BatangChe' style="font-family:BatangChe">바탕체</option>
            <option value='Gungsuh' style="font-family:Gungsuh">궁서</option>
            <option value='GungsuhChe' style="font-family:GungsuhChe">궁서체</option>
            <option value='New Gulim' style="font-family:New Gulim">새굴림</option>
            <option value='Malgun Gothic' style="font-family:Malgun Gothic">맑은 고딕</option>
        </select>
        
        <!-- 폰트 크기 -->
        <select class="dropdownMenu" onchange="btnAction(this.value, 'fontSize')">
            <option value='1px' style="font-size:6pt">1</option>
            <option value='2px' style="font-size:8pt">2</option>
            <option value='3px' style="font-size:10pt" selected>3</option>
            <option value='4px' style="font-size:12pt">4</option>
            <option value='5px' style="font-size:14pt">5</option>
            <option value='6px' style="font-size:16pt">6</option>
        </select>

        <!-- 정렬 -->
        <span class="shBtnGroup">
            <button type="button" class="shBtn" onclick="btnAction('justifyleft')"><i class="fas fa-align-left"></i></button>
            <button type="button" class="shBtn" onclick="btnAction('justifycenter')"><i class="fas fa-align-center"></i></button>
            <button type="button" class="shBtn" onclick="btnAction('justifyright')"><i class="fas fa-align-right"></i></button>
        </span>

        <!-- 글자, 배경 색깔 선택 -->
        <span class="colorGroup">
            <span>가</span>
            <input id="colorPicker" type="color" onchange="btnAction(this.value,'forecolor')">
        </span>

        <!-- 에디터 변환 -->
        <span class="shBtnGroup">
            <button type="button" class="shBtn" onclick="convertTo('Editor')">Editor</button>
            <button type="button" class="shBtn" onclick="convertTo('HTML')"><i class="fas fa-code"></i></button>
        </span>
    </div>
    <div id="shTextbox" contentEditable> 
        
    </div>
    <span id="madeBy">shEditor ver 1.0.0</span>

    <!-- Hidden Input -->
    <input type="hidden" id="HTMLtoggle" value="TEXT">
    <input type="hidden" id="inputName">
    <input type="hidden" id="formId">
</div>
`;
$(document).ready(function() {
    let formName = $('#formId').val();
    let shForm = document.getElementById(formName);

    shForm.onsubmit = function () {   
        if($('#HTMLtoggle').val()==='TEXT'){
            $("#inputName").val($('#shTextbox').html());
            alert($("#inputName").val());
        }else{
            $("#inputName").val($('#shTextbox').text());
            alert($("#inputName").val());
        }
    }
});
function shEditor(formId, inputName){
    document.write(shEditorForm);
    $("#formId").val(formId);
    $("#inputName").attr("name",inputName);
};
function btnAction(res, attr){
    console.log(res, attr);
    if( typeof attr === 'undefined'){
        document.execCommand(res);
    }else{
        document.execCommand(attr, false, res);
    }
    return true;
};
function convertTo(res) {
    let toggle = $('#HTMLtoggle').val();
    if(res==='HTML' && toggle === 'TEXT'){
        $('#shTextbox').text($('#shTextbox').html());
        $('#HTMLtoggle').val('HTML');
    }
    else if(res==='Editor' && toggle === 'HTML'){
        $('#shTextbox').html($('#shTextbox').text());
        $('#HTMLtoggle').val('TEXT');
    }
};