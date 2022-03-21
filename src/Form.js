import "./App.css";
const Form = (props) => {
    const handleChange = (e) => {
        props.setText(e.target.value);
    };
    const handleClick = () => {
        let newText = props.text.toUpperCase();
        props.setText(newText);
    };
    const handleLowerClick = () => {
        let newText = props.text.toLowerCase();
        props.setText(newText);
    };
    const clearText = () => {
        props.setText(" ");
    };
    const handleCopy = () => {
        var text = document.getElementById("mytext");
        text.select();
        navigator.clipboard.writeText(text.value);
    };
    return (
        <div>
            <textarea
                value={props.text}
                onChange={handleChange}
                rows='8'
                cols={60}
                id='mytext'
                style={{backgroundColor:'#E5E7E9'}}
                />
            <br />
            <button style={{ padding: 2, margin: 5 }} onClick={handleClick}>
                {" "}
                Upper Case{" "}
            </button>
            <button
                style={{ padding: 2, margin: 5 }}
                onClick={handleLowerClick}>
                {" "}
                Lower Case{" "}
            </button>
            
            <button style={{ padding: 2, margin: 5 }} onClick={clearText}>
                {" "}
                Clear Text{" "}
            </button>
            <button style={{ padding: 2, margin: 5 }} onClick={handleCopy}>
                {" "}
                Copy Text{" "}
            </button>
            <h3>Your Text Summary</h3>
            <p>
                {" "}
                {
                    props.text.split(" ").filter((element)=>{return element != 0}).length
                }{" "}
                words and {props.text.length} characters
            </p>
            <h2>Preview</h2>
            <p>{props.text.length>0?props.text:<p>Nothing to preview</p>}</p>
            
        </div>
    );
};

export default Form;
