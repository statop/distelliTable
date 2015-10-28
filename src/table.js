/**
 * Created by patrick.staton on 10/27/15.
 */

var peopleData = [
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
    {FirstName: "Pete", LastName: "Hunt", Street: "Brookdale", City: "Atlanta", State: "GA", Zip: "30345"},
];

//give each person a key
peopleData.forEach(function(val, idx) {
    val.key = idx + 1
})



var DistelliTable = React.createClass({
    getInitialState: function() {
        return {data: [], start: 0, perPage: 10};
    },
    componentDidMount: function() {
        var thiz = this;
        //could be ajax...
        setTimeout(function() {
            thiz.setState({data: peopleData});
        }, 5)
    },
    handlePreviousClick: function() {
        var start = this.state.start;
        var perPage = this.state.perPage;
        start -= perPage;
        if (start < 0) {
            start = 0;
        }
        this.setState({start: start});
    },
    handleNextClick: function() {
        var start = this.state.start;
        var perPage = this.state.perPage;
        var data = this.state.data;
        if (start + perPage >= data.length) {
            return;
        }
        start += perPage;
        if (start >= data.length) {
            start = data.length - 1;
            if (start < 0) {
                start = 0;
            }
        }
        this.setState({start: start});
    },
    setItemsPerPage: function(num) {
        this.setState({perPage: num});
    },
    render: function() {
        var personRows = [];

        var start = this.state.start;
        var perPage = this.state.perPage;
        var data = this.state.data;
        var idx = start;
        for (; (idx < data.length) && (idx < start + perPage); ++idx) {
            var person = data[idx];
            personRows.push(
                <tr key={person.key}>
                    <td>{person.key}</td>
                    <td>{person.FirstName}</td>
                    <td>{person.LastName}</td>
                    <td>{person.Street}</td>
                    <td>{person.City}</td>
                    <td>{person.State}</td>
                    <td>{person.Zip}</td>
                </tr>
            )
        }
        var begin = start;
        begin++;
        if (begin > data.length) {
            begin = data.length;
        }
        var end = idx;
        if (end > data.length) {
            end = data.length;
        }

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <nav>
                        <span>Showing <strong>{begin}-{end}</strong> of {data.length}</span>&nbsp;&nbsp;
                        <div className="btn-group">
                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {perPage} Items Per Page <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a onClick={this.setItemsPerPage.bind(this, 5)} href="#">5 Items Per Page</a></li>
                                <li><a onClick={this.setItemsPerPage.bind(this, 10)} href="#">10 Items Per Page</a></li>
                                <li><a onClick={this.setItemsPerPage.bind(this, 25)} href="#">25 Items Per Page</a></li>
                                <li><a onClick={this.setItemsPerPage.bind(this, 50)} href="#">50 Items Per Page</a></li>
                                <li><a onClick={this.setItemsPerPage.bind(this, 75)} href="#">75 Items Per Page</a></li>
                                <li><a onClick={this.setItemsPerPage.bind(this, 100)} href="#">100 Items Per Page</a></li>
                            </ul>
                        </div>
                        <ul className="pager">
                            <li className={start == 0 ? 'previous disabled' : 'previous'}><a onClick={this.handlePreviousClick} href="#"><span aria-hidden="true">&larr;</span> Previous</a></li>
                            <li className={idx >= data.length ? 'next disabled' : 'next'}><a onClick={this.handleNextClick} href="#">Next <span aria-hidden="true">&rarr;</span></a></li>
                        </ul>
                    </nav>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Street</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip</th>
                            </tr>
                        </thead>
                        <tbody>
                            {personRows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});



ReactDOM.render(
    <DistelliTable />,
    document.getElementById('content')
);