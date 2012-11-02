package data.model.dto;

public class CustomerDTO  {
	
	private Integer id;
	private String name;
	private String adresse;
	private Integer zipCode;
	private Long phone;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public Integer getZipCode() {
		return zipCode;
	}
	public void setZipCode(Integer zipCode) {
		this.zipCode = zipCode;
	}
	public Long getPhone() {
		return phone;
	}
	public void setPhone(Long phone) {
		this.phone = phone;
	}
	@Override
	public String toString() {
		return "CustomerDTO [id=" + id + ", name=" + name + ", adresse="
				+ adresse + ", zipCode=" + zipCode + ", phone=" + phone + "]";
	}
 
	
}
