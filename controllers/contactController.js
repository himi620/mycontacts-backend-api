
const getContacts = (req, res) => {
    res.status(200).send('Get all contacts');
};


const getContact = (req, res) => {
    res.status(200).send(`Get contact ${req.params.id}`);
};

const createContact = (req, res) => {

    console.log(req.body);
    
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All details are mandatory");        
    }
};

const updateContact = (req, res) => {
    res.status(200).send(`Update contact ${req.params.id}`);
};

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).send(`Delete contact ${req.params.id}`);
};

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };
