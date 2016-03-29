require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');
var assign = require('object-assign');
var CSSTransitionGroup = require('react-addons-css-transition-group')


//redux
//action
const INPUT_TEXT = 'INPUT_TEXT';

var INPUT_TEXT_AC = function(){
    return {
        type: INPUT_TEXT
    }
}


//view
var CheckboxLabel = React.createClass({
    getInitialState: function(){
        return {
            check: this.props.checked
        }
    },
    render: function(){
        var {classname, name} = this.props;
        return (
            <label>
                {name}
                <input type="checkbox" checked={this.state.check} className={classname} onChange={() => {this.setState({check: !this.state.check})}}/>
            </label>
        )
    }
})


var TextInputGroup = React.createClass({
    getInitialState: function(){
        var obj = {};
        obj[this.props.input_props.id] = this.props.input_props.init_val;
        return obj
    },
    input_change:function(e){
        var id = this.props.input_props.id;
        var new_val = e.target.value;
        var obj = {};
        obj[id] = new_val;
        this.state[id] = new_val;
        this.props.onTextChange(obj);
    },
    render: function(){
        var input_props = this.props.input_props;
        var id = input_props.id;
        var g_name = input_props.g_name;
        var input_plc = input_props.input_placeholder;
        var init_val = this.state[id];
        return (
            <div className="g">
                <label htmlFor={id}>{g_name}</label>
                <input type="text" id={id} placeholder={input_plc}  value={init_val} onChange={this.input_change}/>
            </div>
        )
    }
})

var MyForm = React.createClass({
    getInitialState:function(){
        return {
            relname: 'joker',
            ad: '北京',
            date: '2016-03-07'
        }
    },
    submitHandler:function(e){
        e.preventDefault();
        var old_state = this.state;
        var new_state = {};
        for(var key in old_state){
            new_state[key] = old_state[key]+'z'
        }
        this.setState(new_state)
        console.log(this.state);
    },
    text_change:function(new_text){
        this.setState(new_text)
    },
    render: function(){
        var input_props_rel_name = {
            id: "relname",
            g_name: "姓名",
            input_placeholder: "请输入姓名",
            init_val: this.state.relname
        }
        var input_props_ad = {
            id: "ad",
            g_name: "地址",
            input_placeholder: "请输入居住地址",
            init_val: this.state.ad
        }
        var input_props_date = {
            id: "date",
            g_name: "日期",
            input_placeholder: "请输入日期",
            init_val: this.state.date
        }
        return (
            <form onSubmit={this.submitHandler}>
                <TextInputGroup input_props={input_props_rel_name} onTextChange={this.text_change}/>
                <TextInputGroup input_props={input_props_ad} onTextChange={this.text_change}/>
                <TextInputGroup input_props={input_props_date} onTextChange={this.text_change}/>
                <p>{this.state.relname}</p>
                <CheckboxLabel classname="ch" checked={true} name="是否同意"/>
                <button type="submit">submit</button>
            </form>
        )
    }
})

ReactDOM.render(<MyForm />, document.getElementById('form'));


var q_data = [{"province":null,"sources":[1,3,5,7],"keywords":"","spatial_ability":-1,"provinces":[],"tag_ids":["53464d22e138234e34a6735f"],"item_origins":[],"sub_q":[5],"appl_ability":-1,"ref":{"item_id":null,"ex_id":null},"abstract_ability":-1,"calc_ability":-1,"user_selected":false,"data_ability":-1,"q_score":5,"difficulty":1,"item_id":"550780820045fe3e0e532e65","data":{"calc_ability":1,"data_ability":0,"difficulty":1,"spatial_ability":0,"reason_ability":1,"qs":[{"tag_paths":[[{"type_":1101,"_id":"50e227000000000000001101","name":"载体"},{"type_":1101,"_id":"53460037e1382325527fbc21","name":"函数"},{"type_":1101,"_id":"53460215e138232551f1e41d","name":"简单初等函数"},{"type_":1101,"_id":"53460248e138232551f1e421","name":"二次函数"}],[{"type_":1102,"_id":"50e227000000000000001102","name":"知识点"},{"type_":1102,"_id":"53463e8fe138232551f1e484","name":"函数"},{"type_":1102,"_id":"53464249e1382325527fbc7e","name":"函数的性质"},{"type_":1102,"_id":"53464d22e138234e34a6735f","name":"函数的最大（小）值"}]],"tag_ids":["53460248e138232551f1e421","53464d22e138234e34a6735f"]}],"tag_paths":[],"tag_ids":[],"subtype":1,"appl_ability":0,"type":1001,"abstract_ability":0},"reason_ability":-1,"tag_paths":[[{"type_":1102,"_id":"50e227000000000000001102","name":"知识点"},{"type_":1102,"_id":"53463e8fe138232551f1e484","name":"函数"},{"type_":1102,"_id":"53464249e1382325527fbc7e","name":"函数的性质"},{"type_":1102,"_id":"53464d22e138234e34a6735f","name":"函数的最大（小）值"}]],"type":1001,"subtype":1,"item_html":"<q id=\"550780820045fe3e0e532e65\"><ol><li value=\"1\"><subqs><ol><div class=\"qcontainer leaf-q\"><subq><stem>函数&nbsp;\\(y=x^2-2\\)（\\(0\\leqslant x\\leqslant 3\\)）的最大值是<nn>         </nn></stem><opts ><opt class=\"col-xs-3\"><span>A．</span><span>\\(-2\\)</span></opt><opt class=\"col-xs-3\"><span>B．</span><span>\\(0\\)</span></opt><opt class=\"col-xs-3\"><span>C．</span><span>\\(3\\)</span></opt><opt class=\"col-xs-3\"><span>D．</span><span>\\(7\\)</span></opt></opts><div class=\"auxiliary\"><div class=\"answer\"><div class=\"dt\">答案：</div><div class=\"dd\">D</div></div></div></subq></div></ol></subqs></li></ol></q>"}]
console.log(q_data)

var Qview = React.createClass({
    getDefaultProps: function(){
        return {
            item_html: '<q>\
                            <subqs><ol><li value="1">\
                                <div className="error_item_title">匹配失败，原因是：</div>\
                                <div className="error_item_msg">不存在符合条件的试题或符合条件的试题数量不足</div>\
                                <div className="error_item_c">您可以通过<strong className="_modify_error_item">修改试题匹配条件</strong>或<strong className="_del_error_item">删除该试题</strong>来解决此问题</div>\
                            </li></ol></subqs>\
                        </q>'
        }
    },
    componentDidMount: function(){
        MathJax.Hub.Queue(["Typeset",MathJax.Hub,this.getDOMNode()]);
    },
    my_click: function(e){
        console.log(e.currentTarget)
    },
    render: function(){
        return (
            <div className="item" dangerouslySetInnerHTML = {{__html:this.props.item_html}} onClick={this.my_click}>
            </div>
        )
    }

})


var Item = React.createClass({
    my_click: function(e){
        console.log(e.currentTarget)
    },
    render: function(){
        return (
            <div className="item_wrap" onClick={this.my_clickCapture}>
                <Qview {...this.props} />
            </div>
        )
    }
})

var Part = React.createClass({
    render: function(){
        const part = q_data;
        const item_0 = part[0];
        return (
            <div className="part" data-type={item_0.type} data-subtype={item_0.subtype}>
                {this.props.type_name}
                <div className="items">
                    {part.map( (p) => <Item key={p.item_id} item_html={p.item_html} /> )}
                </div>
            </div>
        )
    }

})


var part = ReactDOM.render(<Part type_name="选择题第一小题" />, document.getElementById('paper'));
//ReactDOM.render(<TextInputGroup id="name" g_name="姓名" input_pl aceholder="请输入姓名" />, document.getElementById('form'));


document.getElementById('set').onclick=function(){
    console.log(part)
    part.setProps({type_name: '选择题第二小题'})
}

var TodoList = React.createClass({
  getInitialState: function() {
    return {items: ['hello', 'world', 'click', 'me']};
  },
  handleAdd: function() {
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  handleRemove: function(i) {
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    }.bind(this));
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <CSSTransitionGroup transitionName="example">
          {items}
        </CSSTransitionGroup>
      </div>
    );
  }
});

ReactDOM.render(<TodoList />, document.getElementById('form'));


var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      var lastGist = result[0];
      if (this.isMounted()) {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        {this.state.username} s last gist is
        <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
});

React.render(
    <UserGist source="https://api.github.com/users/octocat/gists" />,
    document.getElementById('example2')
);
