
class apiFeature{
    constructor(query,questr){
        this.query=query;
        this.questr=questr;
    }

    search(){
        let keyword = this.questr.keyword ? 
        {
            name:{
                $regex:this.questr.keyword,
                $option:'i',
            },

        }
        :{};

        this.query.find({...keyword});
        return this;
    }

    filter(){
        const questrcopy = {...this.questr};

        const removeflied = ['keyword','limit','page'];

        removeflied.forEach((field)=>{
            delete questrcopy[field]
        })

        let strquery = JSON.stringify(questrcopy);
        strquery = strquery.replace(/\b(gt|gte|lt|lte)/g,(match)=>`$${match}`);
        this.query.find(JSON.parse(strquery));
        return this;
    }

   
}

export default apiFeature