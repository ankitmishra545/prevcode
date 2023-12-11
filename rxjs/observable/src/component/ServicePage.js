export const printList = (val,idValue) => {
    let list  = document.createElement("li");
    list.innerText = val;

    document.getElementById(idValue).appendChild(list);
}