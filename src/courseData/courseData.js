var courseData = [
    {
        id: 1,
        name: "Data Analyst",
        price: 59,
        duration: 8,
        hours: 4,
        picture: "https://i.ibb.co/5BnS5zY/data-analyst.jpg",
        instructor: {
            name: "Ritchel Novela",
            img: "https://i.ibb.co/mRvDRBX/Teacher-Pointing.jpg"
        },
        skills: [
            { get: 'Data Warning'},
            { get: "Matplotib"},
            { get: "Bootstrapping"},
            { get: "Pandas & NumP"},
            { get: "Statistics"}
        ]
    },
    {
        id: 2,
        name: "Artificial Intelligence ",
        price: 69,
        duration: 10,
        hours: 3,
        picture: "https://i.ibb.co/5hP9tbW/artificial-intelligence.jpg",
        instructor: {
            name: "John Langsten",
            img: "https://i.ibb.co/7b83LRx/gents-hair-sample.jpg" 
        },
        skills: [
            { get: 'AI Algorithms'},
            { get: "Search Algorithms"},
            { get: "Optimization"},
            { get:"Planning"},
            { get: "Pattern Recognition"}
        ]
    },
    {
        id: 3,
        name: "Data Product Manager",
        price: 39,
        duration: 6,
        hours: 3,
        picture: "https://i.ibb.co/7Gkm5Kx/data-product-manager.jpg",
        instructor: {
            name: "Lauren Newman",
            img: "https://randomuser.me/api/portraits/women/7.jpg"
        },
        skills: [
            { get: "Data Science"},
            { get: "Product Management"},
            { get: "Product design"},
            { get: "Data visualization"},
            { get: "User journey Maps"}
        ]
    },
    {
        id: 4,
        name: "Monetization Strategy",
        price: 35,
        duration: 6,
        hours: 4,
        picture: "https://i.ibb.co/b6Skzn5/monetization.jpg",
        instructor: {
            name: "Bertram Kristensen",
            img: "https://randomuser.me/api/portraits/men/37.jpg"
        },
        skills: [
            { get: "Product management"},
            { get: "Pricing strategy"},
            { get: "Buyer Personas"},
            { get: "Lifetime Value"},
            { get: "Growth strategy"}
        ]
    },
    {
        id: 5, 
        name: "Marketing Analytics",
        price: 29,
        duration: 8,
        hours: 5,
        picture: "https://i.ibb.co/ZNshQ2R/marketing.jpg",
        instructor: {
            name: "Lya Charles",
            img: "https://i.ibb.co/hZDCMJQ/teacher.jpg"
        },
        skills: [
            {get: "Google Analytics"},
            {get: "Excel & Spreadsheets"},
            {get: "Data visualization"},
            {get: "Customer Segmentation"},
        ]
    },
    {
        id: 6,
        name: "Deep Learning",
        price: 55,
        duration: 12,
        hours: 4,
        picture: "https://i.ibb.co/TkqGL0k/deep-learning.jpg",
        instructor: {
            name: "Nelson Otoole",
            img:  "https://randomuser.me/api/portraits/men/17.jpg"
        },
        skills: [
            {get: "Deep Learning"},
            {get: "Neural Networks"},
            {get: "Jupyter Notebooks"},
            {get: "CNNs"},
            {get: "GANs"}
        ]

    },
    
    {
        id: 7,
        name: "Data Visualization",
        price: 59,
        duration: 8,
        hours: 3,
        picture: "https://i.ibb.co/0Md2pPM/data-visualization.jpg",
        instructor: {
            name: "Benny Daiyanto",
            img: "https://randomuser.me/api/portraits/men/67.jpg"
        },
        skills: [
            {get: "Data visualization"},
            {get: "Tableau"},
            {get: "Dashboards"},
            {get: "Data Storytelling"}
        ]

    },
  
    {
        id: 8,
        name: "Data Engineer",
        price: 79,
        duration: 10,
        hours: 5,
        picture: "https://i.ibb.co/HCKbTCy/data-engineer.jpg",
        instructor: {
            name: "Corey Roberts",
            img: "https://randomuser.me/api/portraits/men/28.jpg"
        },
        skills: [
            {get: "Data Modeling"},
            {get: "Data Pipelines"},
            {get: "Data Lakes"},
            {get: "Spark"},
            {get: "Airflow"}
        ]

    },
  
    {
        id: 9,
        name: "iOS Developer",
        price: 49,
        duration: 8,
        hours: 3,
        picture: "https://i.ibb.co/s1zpGYv/ios-developer.jpg", 
        instructor: {
            name: "Noah Liu",
            img: "https://randomuser.me/api/portraits/men/86.jpg"
        },
        skills: [
            {get: "iOS Developer"},
            {get: "Core Data"},
            {get: "iOS networking"},
            {get: "App Publishing"},
            {get: "User Interfaces "}
        ]

    },
    {
        id: 10,
        name: "Data Streaming",
        price: 49,
        duration: 6,
        hours: 3,
        picture: "https://i.ibb.co/34bVSnG/data-streaming.jpg",
        instructor: {
            name: "Ava Picard",
            img: "https://randomuser.me/api/portraits/women/41.jpg"
        },
        skills: [
            {get: "Data streaming"},
            {get: "Spark"},
            {get: "Kafka"},
            {get: "Kafka Streaming"},
            {get: "Spark Streaming"}
        ]

    },
    {
        id: 11,
        name: "Data Scientist",
        price: 89,
        duration: 10,
        hours: 5,
        picture: "https://i.ibb.co/Tbb9bVy/data-scientinst.jpg",
        instructor: {
            name: "David Marcus",
            img: "https://i.ibb.co/7b83LRx/gents-hair-sample.jpg" 
        },
        skills: [
            {get: "Machine Learning"},
            {get: "Deep Learning"},
            {get: "Software Engineering"}
        ]

    },
    {
        id: 12,
        name: "Business Analytics",
        price: 59,
        duration: 8,
        hours: 3,
        picture: "https://i.ibb.co/12PFKKm/business-analytics.jpg",
        instructor: {
            name: "Lola Edwards",
            img: "https://randomuser.me/api/portraits/women/54.jpg"
        },
        skills: [
            {get: "Excels & Spreadsheets"},
            {get: "SQL"},
            {get: "Data Visualization"},
            {get: "Data Dashboards"}
        ]

    },
    {
        id: 13,
        name: "Cloud DevOps Engineer",
        price: 39,
        duration: 6,
        hours: 5,
        picture: "https://i.ibb.co/vBRyvBf/cloud-dev.jpg",
        instructor: {
            name: "JM De Leone",
            img: "https://i.ibb.co/xYpyrts/2.jpg"
        },
        skills: [
            {get: "AWS"},
            {get: "Configuration Management with Anisble"},
            {get: "Continuous Integration"},
            {get: "CloudFormation"},
            {get: "Microservices with Kubernetes"}
        ]

    },
    {
        id: 14,
        name: "Web Accessibility",
        price: 29,
        duration: 6,
        hours: 4,
        picture: "https://i.ibb.co/85ywGZy/web-accessibility.jpg",
        instructor: {
            name: "Amelia Thompson",
            img: "https://randomuser.me/api/portraits/women/3.jpg"
        },
        skills: [
            {get: "Accessibility"},
            {get: "Screen Readers"},
            {get: "Focus"},
            {get: "Semantics"},
            {get: "ARIA"}
        ]

    },
    {
        id: 15,
        name: "Creating an Analytical Dataset",
        price: 39,
        duration: 8,
        hours: 3,
        picture: "https://i.ibb.co/4TW09sQ/analytical-dataset.jpg",
        instructor: {
            name: "Vicky Butler",
            img: "https://randomuser.me/api/portraits/women/83.jpg"
        },
        skills: [
            {get: "Data Issues"},
            {get: "Data Formatting"},
            {get: "Data Blending"}
        ]

    },
  
]

export default courseData;
