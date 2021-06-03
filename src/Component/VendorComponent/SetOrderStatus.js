import { MenuItem, Select } from "@material-ui/core";
import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class SetOrderStatus extends Component {

    constructor(props) {
        super(props);
        this.ordStat = 0
        this.ordID = 0
        this.state = {

        }

    }
    componentDidMount() {
        this.props.history.push('/setorderstatus')
        console.log(this.props.location.state)
        this.ordID = this.props.location.state

    }
    handleChange(e) {

        console.log(e.target.value)
        this.ordStat = e.target.value
        console.log("order ID ", this.ordID)
        axios.put(`http://localhost:9090/GharKaKhana-api/vendors/setOrderStatus/${this.ordID}/${this.ordStat}`)
            .then((result) => {
                this.setState({ foodItems: result.data })
            })
            .catch((error) => {
                alert(error);
            });

    }

    render() {
        return (
            <div className="container">
                <table width="50%">
                    <h3>Set Order Status</h3>
                    <Select
                        fullWidth
                        name="name"
                        value={this.value}
                        onChange={event => this.handleChange(event)}

                    >
                        <MenuItem value="Accepted">Accepted</MenuItem>
                        <MenuItem value="Out for delivery">Out for delivery</MenuItem>
                        <MenuItem value="Delivered">Delivered</MenuItem>
                    </Select>
                    <div className = "text-center">
                    <Link className="btn btn-info mt-4" to="/viewvendororders">Back</Link>
                    </div>
                    
                </table>
            </div>
        )
    }
}