import React from 'react';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

  export default function Settings() {
  const { currentUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      await updateProfile(auth.currentUser, {
        displayName: displayName
      });
      setSuccessMessage('Profile updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (

    <div className="settings">
      <h1>Settings</h1>
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            id="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        
        <button type="submit" disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
        
        {successMessage && <div className="success-message">{successMessage}</div>}
      </form>
    </div>
  );
}