const rootcontroller = (req, res) => {
    res.status(200).send({
      message: "welcome to fashion trends",
});
};
  module.exports = rootcontroller;