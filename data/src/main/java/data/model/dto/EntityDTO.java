package data.model.dto;

import javax.xml.bind.annotation.XmlElement;

import data.model.def.ICompany;
import data.model.def.IEntity;

public class EntityDTO implements IEntity {
	
	private long id;
	private String name;
	private ICompany company;
	@Override
	@XmlElement(name = "name")
	public String getName() {
		return name;
	}
	@Override
	public void setName(String name) {
		this.name= name; 
		
	}
	@Override
	@XmlElement(name = "id")
	public long getId() {
		return id;
	}
	@Override
	public void setId(long id) {
		this.id = id;
		
	}
	
	
	@Override
	public ICompany getCompany() {
		return company;
	}
	@Override
	public void setCompany(ICompany company) {
		this.company = company;
	}
	

	

}
