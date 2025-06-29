import { useState } from 'react';
import styles from '../../styles/AuthForm.module.scss';
import FormInput from '../../Components/FormInput/FormInput';
import ProfileUpload from '../../Components/ProfileUpload/ProfileUpload';
import  illustrationImage from "../../assets/Images/Jpeg/Illustration-auth.jpeg"
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from 'framer-motion';
import { LuUser, LuMail, LuLock, LuArrowRight } from 'react-icons/lu';

const AuthForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        sex: 'male',
        profileUrl: '',
        role: 'user'
    });
    const [captchaValue, setCaptchaValue] = useState(null);
     const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
};

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Ici vous ajouterez la logique de soumission
    };
    
    // Animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
         <motion.div 
            className={styles.authContainer}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div 
                className={styles.illustrationSection}
                variants={itemVariants}
            >
                <div className={styles.illustrationContent}>
                    <motion.h2 
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Bienvenue sur notre plateforme
                    </motion.h2>
                    <motion.p
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Rejoignez notre communauté et profitez de tous nos services exclusifs.
                    </motion.p>
                    <motion.img 
                        src={illustrationImage} 
                        alt="Illustration" 
                        className={styles.illustrationImage}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    />
                </div> <br />
                <p>©  { new Date().getFullYear() } Edden. Tous droits réservés.</p>
            </motion.div>
            
            <motion.div 
                className={styles.authSection}
                variants={itemVariants}
            >
                <motion.form 
                    onSubmit={handleSubmit} 
                    className={styles.authForm}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.h1 
                        className={styles.title}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Edden Authentification
                    </motion.h1>
                    
                    
                    <motion.div variants={itemVariants}>
                        <FormInput
                            label="Nom complet"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            icon={<LuUser />}
                        />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                        <FormInput
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            icon={<LuMail />}
                        />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                        <FormInput
                            label="Mot de passe"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            icon={<LuLock />}
                        />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                        <FormInput
                            label="Confirmer le mot de passe"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            icon={<LuLock />}
                        />
                    </motion.div>
                    
                    <motion.div 
                        className={styles.selectGroup}
                        variants={itemVariants}
                    >
                        <label>Sexe</label>
                        <select 
                            name="sex" 
                            value={formData.sex}
                            onChange={handleChange}
                            className={styles.selectInput}
                        >
                            <option value="male">Homme</option>
                            <option value="female">Femme</option>
                            <option value="other">Autre</option>
                        </select>
                    </motion.div>
                     <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <ProfileUpload 
                            profileUrl={formData.profileUrl}
                            setProfileUrl={(url) => setFormData({...formData, profileUrl: url})}
                        />
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className={styles.captchaContainer}
                    >
                        <ReCAPTCHA
                            sitekey="6Lc29S0qAAAAABuR00MS7tL0RgDzvoUyaejbyhrO"
                            onChange={handleCaptchaChange}
                        />
                    </motion.div>
                    
                    <motion.button 
                        type="submit" 
                        className={styles.submitButton}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        variants={itemVariants}
                    >
                        S'inscrire <LuArrowRight className={styles.arrowIcon} />
                    </motion.button>
                </motion.form>
            </motion.div>
        </motion.div>
    );
};

export default AuthForm;