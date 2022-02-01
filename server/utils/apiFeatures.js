class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    search() {
        let regex = new RegExp(this.queryStr.location, 'i');
        // { $and: [ { $or: [{title: regex },{description: regex}] }, {category: value.category}, {city:value.city} ] }
        // const location = this.queryStr.location ? {
        //     // $and: [{ $or: [{ title: regex }, { description: regex }] }, { symptoms: value.symptoms }, { diagnosis: value.diagnosis }]
        //     title: {
        //         $regex: this.queryStr.location,
        //         $options: 'i'
        //     }

        // } : {}
        // this.query = this.query.find({ ...location })
        this.query = this.query.find().or([{ 'title': { $regex: regex } }, { 'description': { $regex: regex } }, { 'symptoms': { $regex: regex } }])
        // console.log(location);
        return this;
    }
}

export default APIFeatures;