class MyFirstComponent extends React.Component{
    render(){
        return(
            <div>
                <h2 className="class-highlight">Hello World from a component!</h2>
            </div>
        );
    }
}
class MyFirstList extends React.Component{
    render(){
        const orange_str="Orange";
        const apple_str="Apple";
        const banana_str="Banana";
        const fruit_img='Images/fruit.jpg';
        const image_el=<img src={fruit_img} />;
        var items=['Jackfruit', 'Mango', 'Strawberry', 'Grapes', 'Peach'];
        var item=items[Math.floor(Math.random()*items.length)];
        const fruit_list=(
            <div>
                <div key="el-key">Some of my favourite fruits</div>
                <ul>
                    <li key="O-key">{orange_str}</li>
                    <li key="A-key">{apple_str}</li>
                    <li key="B-key">{banana_str}</li>
                    <li key="N-key" className="my-fruit">{item}</li>
                </ul>
                {image_el}
            </div>
        );
        return fruit_list;
    }
}
ReactDOM.render(<MyFirstComponent />, document.getElementById("my-first-component"));
function on_tick(){
    ReactDOM.render(<MyFirstList />, document.getElementById("my-first-list"));
}
setInterval(on_tick(), 2000);