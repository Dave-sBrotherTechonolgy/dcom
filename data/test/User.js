const Users = [
    {
        "name": "Firstname1 Lastname1",
        "description": "Description1",
        "website": "email1@domain1.com",
        "followers": 10,
        "connections": 20,
        "about": {
            "text": "About text1"
        },
        "education": [
            {
                "certificate_type": "Cert Type1",
                "institution": "Institute1"
            }
        ],
        "certifications": [
            {
                "from": "Company1",
                "issue_date": "Date1",
                "expiry": "Expiry1",
                "name": "Certificate1"
            }
        ],
        "skills": [
            {
                "skill_name": "Skill1",
            }
        ],
        "projects": [
            {
                "name": "Project1",
                "start_date": "Project1_Start",
                "end_date": "Project1_End",
                "url": "Project1_Url",
                "description": "Project1_Description"
            }
        ],
        "languages": [
            {
                "language": "Language1",
                "proficiency": "Language1_Proficiency"
            }
        ]
    }
];

module.exports.Users = Users;