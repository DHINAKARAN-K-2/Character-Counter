var textarea=document.getElementById("textarea")
var countl=document.getElementById("countl")
var warningmsg=document.getElementById("warningmsg")
const maxCount=200
textarea.addEventListener("input",function()
    {
        var text = textarea.value
        var count=text.length
        countl.textContent=`${count}/${maxCount} Characters`
        if(count>200)
        {
            warningmsg.style.display="block"
            textarea.value=text.substring(0,200)
        }
        else
        {
             warningmsg.style.display="none"
        }
        
    }
)