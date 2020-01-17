import React, { Component } from 'react';
import {Table} from 'antd';
import './Student.css';
import axios from 'axios'
import Mock from './../Mock/mock';
const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }
  ];
class Student extends Component {
  constructor(){
    super();
    this.state={
      dataSource:[]
    }

  
  }
    componentWillMount(){
        axios.get('http://www.weichuang.com/student').then((res)=>{
            console.log(res);
            this.setState({
                  
            })
        })
        
    }
    render() {
        return (
            <div className="student-list">
                学生列表
                <Table dataSource={this.state.list} columns={columns} />;
            </div>
        );
    }
}

export default Student;