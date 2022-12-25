function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
function showOk() {
  alert("Вы согласны.");
}
function showCancel() {
  alert("Вы отменили выполнение.");
}
// использование: функции showOk, showCancel
ask("Вы согласны?", showOk, showCancel);
