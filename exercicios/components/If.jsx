export default function IfComponent(props) {
    if (props.teste){
        return props.children
    } else {
        return null
    }
}