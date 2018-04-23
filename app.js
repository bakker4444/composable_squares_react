const Title = (props) => {
    return React.createElement(
        "h1",
        {
            style: {
                backgroundColor: props.backgroundColor,
                color: props.textColor,
                display: "inline-block",
                height: "200px",
                width: "200px"
            }
        },
        props.textColor + " on " + props.backgroundColor
    );
}

ReactDOM.render(
    React.createElement(
        "div",
        {},
        Title({
            backgroundColor: "blue",
            textColor: "white"
        }),
        Title({
            backgroundColor: "red",
            textColor: "blue"
        }),
        Title({
            backgroundColor: "pink",
            textColor: "green"
        }),
    ),
    document.getElementById("app")
);
