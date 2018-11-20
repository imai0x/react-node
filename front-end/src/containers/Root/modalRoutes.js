import React from 'react'
import { connect } from 'react-redux'
import asyncComponent from '../../components/AsyncComponent'
import { ModalType } from '../../redux/actions/modal'

const AsyncMenuModal = asyncComponent(() => import('../MenuModal'))
const AsyncComboSliceModal = asyncComponent(() => import('../ComboSliceModal'))
const AsyncCardInfoModal = asyncComponent(() => import('../CardInfoModal'))
const AsyncEditProfileModal = asyncComponent(() => import('../EditProfileModal'))
const AsyncOrderFeedbackModal = asyncComponent(() => import('../OrderFeedbackModal'))

/**
 * Routes
 */

const Modal = (props) => {
  const active = props.modal.active

  return (
    <div>
      {/* Menu Modal */}
      { active === ModalType.menuModal && <AsyncMenuModal /> }

      {/* Combo Slice Modal */}
      { active === ModalType.comboSliceModal && <AsyncComboSliceModal /> }

      {/* Card Info Modal */}
      { active === ModalType.cardInfoModal && <AsyncCardInfoModal /> }

      {/* Edit Profile Modal */}
      { active === ModalType.editProfileModal && <AsyncEditProfileModal /> }

      {/* Rating Modal */}
      { active === ModalType.orderFeedbackModal && <AsyncOrderFeedbackModal /> }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    modal: state.modal,
  }
}

export default connect(mapStateToProps)(Modal)
