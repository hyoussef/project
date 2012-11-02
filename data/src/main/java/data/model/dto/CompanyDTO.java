package data.model.dto;




public class CompanyDTO {
	
	private String id;
	private String code;
	private String name;
	private String description;
	private String adress;
	private String ville;
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getId() {
		return id;
	}
	
    public void setId(String id) {
		this.id = id;
	}
	
    public String getDescription() {
		return description;
	}
	
    public void setDescription(String description) {
		this.description = description;
	}
	
    public String getName() {
		return name;
	}
	
    public void setName(String name) {
		this.name = name;
	}
	
    public String getAdress() {
		return adress;
	}
	
    public void setAdress(String adress) {
		this.adress = adress;
	}
	
    public String getVille() {
		return ville;
	}
	
    public void setVille(String ville) {
		this.ville = ville;
	}
	

}
