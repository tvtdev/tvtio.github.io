import React from 'react';
import axios from 'axios';
import {
    Table,
    Button
} from 'semantic-ui-react';
import Loader from "./Loader";
import cookie from 'react-cookies';

export default class TableComponent extends React.Component {

    state = {
        dataList: [],
        isError: false
    };

    componentDidMount() {
        var self = this;
      //  const url = "https://0fadggmpo7.execute-api.us-east-2.amazonaws.com/beta/sample-api";
        const url = "https://ji67dvwyn9.execute-api.us-east-1.amazonaws.com/Prod/restapi2"; 
        axios.get(url, {
           params: {
               status: 'active'
           },
           headers: {
            "Content-Type": "application/json",
         //    "Access-Control-Allow-Origin": "*",
             "Authorization": cookie.load("_ref_i_token_")
         }
        }).then(res => {
            self.setState({
               // dataList : res.data.Items
                dataList : res.data
            })
        }).catch(err => {
            self.setState({
                isError: true
            })
        });
    }

    retry = () => {
        window.location.reload();
    };

    render() {
        const {
            isError,
            dataList
        } = this.state;

        if(isError) {
            return (
                <div className="centerAlignment">
                    <div>
                        <h1> Oops... Please check your network (: </h1>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <Loader dimensions={'20px'}/>
                    </div>
                    <div className="centerAlignment" style={{ marginTop: '100px' }}>
                        <Button primary onClick={this.retry}> Retry </Button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="centerAlignment">
                    <TableHeader dataList={dataList}/>
                </div>
            );
        }
    }
}

const TableHeader = (props) => {
    return (
        <div>
            <Table basic='very'
                   columns={4}
                   size='large'
                   selectable={true}
                   className="space_between_two_component"
                   celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign='center'>Email</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Zip</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Comment</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <TableContent dataList={props.dataList} selectedRow={props.selectedRow}/>
                </Table.Body>
            </Table>
        </div>
    );
};

class TableContent extends React.Component {

    selectedRow = (data) => {
        console.log('Row data ', data);
        console.log('Row data ', data.email);
        console.log('Row data ', data.Comment);
     //   setInterval(() => {
     //       window.location.reload();
     //   }, 3000);
    };

    render() {
        if (this.props.dataList.length <= 0)
            return null;
        else {
            return (
                this.props.dataList && this.props.dataList.length > 0 && this.props.dataList.map((info, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Table.Row key={index}>
                                <Table.Cell textAlign='center' width={4}>{info.email}</Table.Cell>
                                <Table.Cell textAlign='center' width={1}>{info.zip}</Table.Cell>
                                <Table.Cell textAlign='center' width={4}>{info.Comment}</Table.Cell>
                                <Table.Cell width={1}>
                                    <Button primary onClick={() => this.selectedRow(info)}> Submit</Button>
                                </Table.Cell>
                            </Table.Row>
                        </React.Fragment>
                    );
                })
            );
        }
    }
}