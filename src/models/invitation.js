
const InvitationStatus = {
  ACCEPTED: 'ACCEPTED',
  REVOKED: 'REVOKED',
  PENDING: 'PENDING'
};

const UserRole = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  USER: 'USER',
  SITE_ADMIN: 'SITE_ADMIN',
  SITE_MANAGER: 'SITE_MANAGER',
  SITE_MODERATOR: 'SITE_MODERATOR',
  SITE_EDITOR: 'SITE_EDITOR',
  HUB_USER: 'HUB_USER',
  HUB_GUEST: 'HUB_GUEST',
  HUB_MANAGER: 'HUB_MANAGER',
  HUB_MODERATOR: 'HUB_MODERATOR',
  HUB_EDITOR: 'HUB_EDITOR'
};


const invitationModel = (sequelize, DataTypes) => {
  const Invitation = sequelize.define('Invitation', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    siteId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM(...Object.values(InvitationStatus)),
      defaultValue: 'PENDING'
    },
    role: {
      type: DataTypes.ENUM(...Object.values(UserRole)),
      defaultValue: 'HUB_USER'
    }
  }, {
    timestamps: true,
    /* indexes: [
      { fields: ['siteId'] }
    ] */
  });

  return Invitation;
};

module.exports = invitationModel;