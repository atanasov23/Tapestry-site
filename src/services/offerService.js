const User = require('../models/user');
const Offer = require('../models/offer');

const catalogTemplate = () => {

    return Offer.find().lean();

}

const detailsTemplate = async (id, userId) => {

    const populate = await Offer.findById(id)
        .populate({ path: 'owner', match: { _id: { $in: userId } } })
        .populate({ path: 'buyAcrypto', match: { _id: { $in: userId } } })
        .lean();

    const offerData = {
        owner: false,
        buy: false,
        populate
    };

    if (populate.owner.length !== 0) {

        offerData.owner = true;

    }

    if (populate.buyAcrypto.length !== 0) {

        offerData.buy = true;

    }

    return offerData;

}

const createOffer = async (data, user) => {

   // const userData = await User.findOne({ username: user });

    const offer = new Offer({
        name: data.name,
        image: data.image,
        price: data.price,
        description: data.description,
        PaymentMethod: data.payment,
    });

    offer.owner.push(user);

    offer.save();

}

const editOffer = async (id, offerData, res) => {

    await Offer.updateOne({ _id: id }, {
        name: offerData.name,
        image: offerData.image,
        price: offerData.price,
        description: offerData.description,
        PaymentMethod: offerData.payment
    });

    return res.redirect(`/details/${id}`);
}

const editViewTemplate = (data) => {

    return Offer.findById(data).lean();

}

const buyCrypto = async (data, res, req) => {

    const offer = await Offer.findById(data);

    offer.buyAcrypto.push(req.user._id);

    offer.save();

    return res.redirect(`/details/${data}`);

}

const deleteOffer = async (id, res) => {

    await Offer.deleteOne({ _id: id })

    return res.redirect('/catalog');


}

module.exports = {

     createOffer,
    editOffer,
    catalogTemplate,
    detailsTemplate,
    buyCrypto,
    editViewTemplate,
    deleteOffer
}