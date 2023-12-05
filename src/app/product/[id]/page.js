import React from 'react';

const page = ({params , searchParams}) => {
    console.log(params);
    return (
        <div>
            This is dianamic page {params.id}
            This is dianamic page {searchParams.category}
        </div>
    );
};

export default page;