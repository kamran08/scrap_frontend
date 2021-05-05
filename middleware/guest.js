
export default function ({ store, redirect }) {
    
    if (store.getters.getAuthUser) {
      return redirect('/feed')
    }

  }