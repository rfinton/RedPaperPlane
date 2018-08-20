function postGoal(ev) {
  if(clickedOn.indexOf(ev.currentTarget.id) == -1) {
    var tk = document.getElementById("tk");
    tk = tk.contentWindow || tk.contentDocument;
    
    if(tk.document) {
      clickedOn.push(ev.currentTarget.id);
      tk.document.querySelector("input[name=clicked_on]").value = clickedOn.toString();
      tk.document.forms[0].submit();
    }
  }
}