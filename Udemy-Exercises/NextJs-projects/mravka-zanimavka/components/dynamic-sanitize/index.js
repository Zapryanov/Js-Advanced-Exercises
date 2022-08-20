import sanitize from "sanitize-html";

function DynamicSanitizeComponent(props) {

    console.log(props.text);

    const clean = sanitize(props.text, {
        allowedTags: [ 'br', 'b', 'i', 'em', 'span', 'strong', 'a', 'p', 'div', 'h1', 'h2', 'h3', 'ul', 'li' ],
        allowedAttributes: {
          'a': [ 'href' ]
        },
        selfClosing: [ 'br', 'hr', 'link' ]
    })

    return (
        <div>
            {clean}
        </div>
    )
}

export default DynamicSanitizeComponent;