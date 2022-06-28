import Post from "@models/post";
import * as $ from "jquery";
import "@/styles/styles";
const post = new Post("webpack post title");
$("pre").html(post.toString());
// console.log(post.toString());
