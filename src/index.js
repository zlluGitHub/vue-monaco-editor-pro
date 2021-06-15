
import './assets/gloable.scss'
import 'font-awesome/css/font-awesome.css'
window.onkeydown = function (e) {
    // 屏蔽ctrl+s 保存
    if (e.ctrlKey && e.keyCode == 83) {
        // alert('禁止使用ctrl+s');
        e.preventDefault();
        e.returnValue = false;
        return false;
    }
};
import MonaceEditor from './components/MonacoEditor.vue';
export default MonaceEditor;

