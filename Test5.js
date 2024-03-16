let txt  = document.getElementById("txt");
function dis(val)
{
    txt.value += val;
}
function solve()
{
    let x = txt.value;
    let y=eval(x);
    txt.value=y;
}
function clr(){
    txt.value = "";
}
window.addEventListener("keypress",function(inp){
    if(inp.key =="1")
    {
        document.getElementById("1").click();
    }
    else if(inp.key =="2")
    {
        document.getElementById("2").click();
    }
    else if(inp.key =="3")
    {
        document.getElementById("3").click();
    }
    else if(inp.key =="4")
    {
        document.getElementById("4").click();
    }
    else if(inp.key =="5")
    {
        document.getElementById("5").click();
    }
    else if(inp.key =="6")
    {
        document.getElementById("6").click();
    }
    else if(inp.key =="7")
    {
        document.getElementById("7").click();
    }
    else if(inp.key =="8")
    {
        document.getElementById("8").click();
    }
    else if(inp.key =="9")
    {
        document.getElementById("9").click();
    }
    else if(inp.key =="+")
    {
        document.getElementById("+").click();
    }
    else if(inp.key =="-")
    {
        document.getElementById("-").click();
    }
    else if(inp.key =="*")
    {
        document.getElementById("*").click();
    }
    else if(inp.key =="/")
    {
        document.getElementById("/").click();
    }
    else if(inp.key =="Enter")
    {
        document.getElementById("=").click();
    }
    
    
})