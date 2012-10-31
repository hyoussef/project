package data.model.dto;

public class AbbatoireDTO {

	public AbbatoireDTO() {
		super();
	}
	
	private String departement;
	private String numeroAutorisation;
	private Long siret;
	private String denominateur;
	private String adresse;
	
	public String getDepartement() {
		return departement;
	}

	public void setDepartement(String departement) {
		this.departement = departement;
	}

	/**
	 * getteur 
	 * @return the numeroAutorisation
	 */
	public String getNumeroAutorisation() {
		return numeroAutorisation;
	}

	/**
	 * @param numeroAutorisation the numeroAutorisation to set
	 */
	public void setNumeroAutorisation(String numeroAutorisation) {
		this.numeroAutorisation = numeroAutorisation;
	}

	/**
	 * @return the siret
	 */
	public Long getSiret() {
		return siret;
	}

	/**
	 * @param siret the siret to set
	 */
	public void setSiret(Long siret) {
		this.siret = siret;
	}

	/**
	 * @return the denominateur
	 */
	public String getDenominateur() {
		return denominateur;
	}

	/**
	 * @param denominateur the denominateur to set
	 */
	public void setDenominateur(String denominateur) {
		this.denominateur = denominateur;
	}

	/**
	 * @return the adresse
	 */
	public String getAdresse() {
		return adresse;
	}

	/**
	 * @param adresse the adresse to set
	 */
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	@Override
	public String toString() {
		return "AbbatoireDTO [departement=" + departement
				+ ", numeroAutorisation=" + numeroAutorisation + ", siret="
				+ siret + ", denominateur=" + denominateur + ", adresse="
				+ adresse + "]";
	}

	
	
	

}
