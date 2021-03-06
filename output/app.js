webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(161);
	var assign = __webpack_require__(162);
	var CSSTransitionGroup = __webpack_require__(163);

	//redux
	//action
	var INPUT_TEXT = 'INPUT_TEXT';

	var INPUT_TEXT_AC = function INPUT_TEXT_AC() {
	    return {
	        type: INPUT_TEXT
	    };
	};

	//view
	var CheckboxLabel = React.createClass({
	    displayName: 'CheckboxLabel',

	    getInitialState: function getInitialState() {
	        return {
	            check: this.props.checked
	        };
	    },
	    render: function render() {
	        var _this = this;

	        var _props = this.props;
	        var classname = _props.classname;
	        var name = _props.name;

	        return React.createElement(
	            'label',
	            null,
	            name,
	            React.createElement('input', { type: 'checkbox', checked: this.state.check, className: classname, onChange: function onChange() {
	                    _this.setState({ check: !_this.state.check });
	                } })
	        );
	    }
	});

	var TextInputGroup = React.createClass({
	    displayName: 'TextInputGroup',

	    getInitialState: function getInitialState() {
	        var obj = {};
	        obj[this.props.input_props.id] = this.props.input_props.init_val;
	        return obj;
	    },
	    input_change: function input_change(e) {
	        var id = this.props.input_props.id;
	        var new_val = e.target.value;
	        var obj = {};
	        obj[id] = new_val;
	        this.state[id] = new_val;
	        this.props.onTextChange(obj);
	    },
	    render: function render() {
	        var input_props = this.props.input_props;
	        var id = input_props.id;
	        var g_name = input_props.g_name;
	        var input_plc = input_props.input_placeholder;
	        var init_val = this.state[id];
	        return React.createElement(
	            'div',
	            { className: 'g' },
	            React.createElement(
	                'label',
	                { htmlFor: id },
	                g_name
	            ),
	            React.createElement('input', { type: 'text', id: id, placeholder: input_plc, value: init_val, onChange: this.input_change })
	        );
	    }
	});

	var MyForm = React.createClass({
	    displayName: 'MyForm',

	    getInitialState: function getInitialState() {
	        return {
	            relname: 'joker',
	            ad: '北京',
	            date: '2016-03-07'
	        };
	    },
	    submitHandler: function submitHandler(e) {
	        e.preventDefault();
	        var old_state = this.state;
	        var new_state = {};
	        for (var key in old_state) {
	            new_state[key] = old_state[key] + 'z';
	        }
	        this.setState(new_state);
	        console.log(this.state);
	    },
	    text_change: function text_change(new_text) {
	        this.setState(new_text);
	    },
	    render: function render() {
	        var input_props_rel_name = {
	            id: "relname",
	            g_name: "姓名",
	            input_placeholder: "请输入姓名",
	            init_val: this.state.relname
	        };
	        var input_props_ad = {
	            id: "ad",
	            g_name: "地址",
	            input_placeholder: "请输入居住地址",
	            init_val: this.state.ad
	        };
	        var input_props_date = {
	            id: "date",
	            g_name: "日期",
	            input_placeholder: "请输入日期",
	            init_val: this.state.date
	        };
	        return React.createElement(
	            'form',
	            { onSubmit: this.submitHandler },
	            React.createElement(TextInputGroup, { input_props: input_props_rel_name, onTextChange: this.text_change }),
	            React.createElement(TextInputGroup, { input_props: input_props_ad, onTextChange: this.text_change }),
	            React.createElement(TextInputGroup, { input_props: input_props_date, onTextChange: this.text_change }),
	            React.createElement(
	                'p',
	                null,
	                this.state.relname
	            ),
	            React.createElement(CheckboxLabel, { classname: 'ch', checked: true, name: '是否同意' }),
	            React.createElement(
	                'button',
	                { type: 'submit' },
	                'submit'
	            )
	        );
	    }
	});

	ReactDOM.render(React.createElement(MyForm, null), document.getElementById('form'));

	var q_data = [{ "province": null, "sources": [1, 3, 5, 7], "keywords": "", "spatial_ability": -1, "provinces": [], "tag_ids": ["53464d22e138234e34a6735f"], "item_origins": [], "sub_q": [5], "appl_ability": -1, "ref": { "item_id": null, "ex_id": null }, "abstract_ability": -1, "calc_ability": -1, "user_selected": false, "data_ability": -1, "q_score": 5, "difficulty": 1, "item_id": "550780820045fe3e0e532e65", "data": { "calc_ability": 1, "data_ability": 0, "difficulty": 1, "spatial_ability": 0, "reason_ability": 1, "qs": [{ "tag_paths": [[{ "type_": 1101, "_id": "50e227000000000000001101", "name": "载体" }, { "type_": 1101, "_id": "53460037e1382325527fbc21", "name": "函数" }, { "type_": 1101, "_id": "53460215e138232551f1e41d", "name": "简单初等函数" }, { "type_": 1101, "_id": "53460248e138232551f1e421", "name": "二次函数" }], [{ "type_": 1102, "_id": "50e227000000000000001102", "name": "知识点" }, { "type_": 1102, "_id": "53463e8fe138232551f1e484", "name": "函数" }, { "type_": 1102, "_id": "53464249e1382325527fbc7e", "name": "函数的性质" }, { "type_": 1102, "_id": "53464d22e138234e34a6735f", "name": "函数的最大（小）值" }]], "tag_ids": ["53460248e138232551f1e421", "53464d22e138234e34a6735f"] }], "tag_paths": [], "tag_ids": [], "subtype": 1, "appl_ability": 0, "type": 1001, "abstract_ability": 0 }, "reason_ability": -1, "tag_paths": [[{ "type_": 1102, "_id": "50e227000000000000001102", "name": "知识点" }, { "type_": 1102, "_id": "53463e8fe138232551f1e484", "name": "函数" }, { "type_": 1102, "_id": "53464249e1382325527fbc7e", "name": "函数的性质" }, { "type_": 1102, "_id": "53464d22e138234e34a6735f", "name": "函数的最大（小）值" }]], "type": 1001, "subtype": 1, "item_html": "<q id=\"550780820045fe3e0e532e65\"><ol><li value=\"1\"><subqs><ol><div class=\"qcontainer leaf-q\"><subq><stem>函数&nbsp;\\(y=x^2-2\\)（\\(0\\leqslant x\\leqslant 3\\)）的最大值是<nn>         </nn></stem><opts ><opt class=\"col-xs-3\"><span>A．</span><span>\\(-2\\)</span></opt><opt class=\"col-xs-3\"><span>B．</span><span>\\(0\\)</span></opt><opt class=\"col-xs-3\"><span>C．</span><span>\\(3\\)</span></opt><opt class=\"col-xs-3\"><span>D．</span><span>\\(7\\)</span></opt></opts><div class=\"auxiliary\"><div class=\"answer\"><div class=\"dt\">答案：</div><div class=\"dd\">D</div></div></div></subq></div></ol></subqs></li></ol></q>" }];
	console.log(q_data);

	var Qview = React.createClass({
	    displayName: 'Qview',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            item_html: '<q>\
	                            <subqs><ol><li value="1">\
	                                <div className="error_item_title">匹配失败，原因是：</div>\
	                                <div className="error_item_msg">不存在符合条件的试题或符合条件的试题数量不足</div>\
	                                <div className="error_item_c">您可以通过<strong className="_modify_error_item">修改试题匹配条件</strong>或<strong className="_del_error_item">删除该试题</strong>来解决此问题</div>\
	                            </li></ol></subqs>\
	                        </q>'
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.getDOMNode()]);
	    },
	    my_click: function my_click(e) {
	        console.log(e.currentTarget);
	    },
	    render: function render() {
	        return React.createElement('div', { className: 'item', dangerouslySetInnerHTML: { __html: this.props.item_html }, onClick: this.my_click });
	    }

	});

	var Item = React.createClass({
	    displayName: 'Item',

	    my_click: function my_click(e) {
	        console.log(e.currentTarget);
	    },
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'item_wrap', onClick: this.my_clickCapture },
	            React.createElement(Qview, this.props)
	        );
	    }
	});

	var Part = React.createClass({
	    displayName: 'Part',

	    render: function render() {
	        var part = q_data;
	        var item_0 = part[0];
	        return React.createElement(
	            'div',
	            { className: 'part', 'data-type': item_0.type, 'data-subtype': item_0.subtype },
	            this.props.type_name,
	            React.createElement(
	                'div',
	                { className: 'items' },
	                part.map(function (p) {
	                    return React.createElement(Item, { key: p.item_id, item_html: p.item_html });
	                })
	            )
	        );
	    }

	});

	var part = ReactDOM.render(React.createElement(Part, { type_name: '选择题第一小题' }), document.getElementById('paper'));
	//ReactDOM.render(<TextInputGroup id="name" g_name="姓名" input_pl aceholder="请输入姓名" />, document.getElementById('form'));

	document.getElementById('set').onclick = function () {
	    console.log(part);
	    part.setProps({ type_name: '选择题第二小题' });
	};

	var TodoList = React.createClass({
	    displayName: 'TodoList',

	    getInitialState: function getInitialState() {
	        return { items: ['hello', 'world', 'click', 'me'] };
	    },
	    handleAdd: function handleAdd() {
	        var newItems = this.state.items.concat([prompt('Enter some text')]);
	        this.setState({ items: newItems });
	    },
	    handleRemove: function handleRemove(i) {
	        var newItems = this.state.items;
	        newItems.splice(i, 1);
	        this.setState({ items: newItems });
	    },
	    render: function render() {
	        var items = this.state.items.map(function (item, i) {
	            return React.createElement(
	                'div',
	                { key: item, onClick: this.handleRemove.bind(this, i) },
	                item
	            );
	        }.bind(this));
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'button',
	                { onClick: this.handleAdd },
	                'Add Item'
	            ),
	            React.createElement(
	                CSSTransitionGroup,
	                { transitionName: 'example' },
	                items
	            )
	        );
	    }
	});

	ReactDOM.render(React.createElement(TodoList, null), document.getElementById('form'));

	var UserGist = React.createClass({
	    displayName: 'UserGist',

	    getInitialState: function getInitialState() {
	        return {
	            username: '',
	            lastGistUrl: ''
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        $.get(this.props.source, function (result) {
	            var lastGist = result[0];
	            if (this.isMounted()) {
	                this.setState({
	                    username: lastGist.owner.login,
	                    lastGistUrl: lastGist.html_url
	                });
	            }
	        }.bind(this));
	    },

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            this.state.username,
	            ' s last gist is',
	            React.createElement(
	                'a',
	                { href: this.state.lastGistUrl },
	                'here'
	            ),
	            '.'
	        );
	    }
	});

	React.render(React.createElement(UserGist, { source: 'https://api.github.com/users/octocat/gists' }), document.getElementById('example2'));

/***/ }
]);