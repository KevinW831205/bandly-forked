module.exports = function(sequelize, DataTypes) {
  const Bands = sequelize.define("bands", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    bandName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    bio: DataTypes.TEXT,

    //will need to json.Stringify to convert or parse it out if we are extracting
    genres: {
      type: DataTypes.STRING

      // get: function() {
      //   return JSON.parse(this.getDataValue("myArrayField"));
      // },
      // set: function(val) {
      //   return this.setDataValue("myArrayField", JSON.stringify(val));
      // }
    },

    members: {
      type: DataTypes.STRING
    },

    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    decrypter: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  return Bands;
};