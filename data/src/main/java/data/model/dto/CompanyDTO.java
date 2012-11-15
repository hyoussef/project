package data.model.dto;

import data.model.def.ICompany;
import data.model.def.IVille;




public class CompanyDTO implements ICompany {
	
	public CompanyDTO() {
		super();
	}
	private long id;
	private String code;
	private String name;
	private String description;
	private String adress;
	private IVille ville;
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public long getId() {
		return id;
	}
	
    public void setId(long id) {
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
	
    public IVille getVille() {
		return ville;
	}
	
    public void setVille(IVille ville) {
		this.ville = ville;
	}
	

}
