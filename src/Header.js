import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <div id="header">
            <Link to="/admin/posts">Posts</Link>
            <Link to="/admin/write">Write</Link>
        </div>
    )
}