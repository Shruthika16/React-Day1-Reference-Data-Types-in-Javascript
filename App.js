function Test()
{
    let myobject={name:"Madras"};
    let newObject=myobject;
    myobject.name="Chennai";
    let myarray=["a","e","i","o","u"]
    let vowelArray=myarray;
    myarray.push("u");
    console.log(myarray)
    const hi=()=>{alert("Check the console output!")}
    return <div><button onClick={hi}>Reference Data types and call the function</button></div>
}
ReactDOM.render(<Test/>,document.getElementById("mydiv"))