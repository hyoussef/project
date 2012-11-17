package data.model.dto;


import java.util.Date;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;

import data.model.def.ICompany;
import data.model.def.IContact;
import data.model.def.IEntity;
import data.model.def.IProject;



public class ProjectDTO implements IProject{
	
	private long id;
	private String name;
	private String description;
	private ICompany company;
	private IEntity entity;
	private List<IContact> contacts; 
	private Date startDate;
	private Date endDate; 
	
	
	public ProjectDTO (){		
	 super();
	}


	

    @Override
    public ICompany getCompany() {
		return company;
	}

    @Override
    public void setCompany(ICompany company) {
		this.company = company;
	}

    @Override
    public Date getStartDate() {
		return startDate;
	}


    @Override
    public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}


	
    @Override
    public Date getEndDate() {
		return endDate;
	}
    @Override
    public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	@Override
	@XmlElement(name = "name")
	public String getName() {
		return name;
	}

	@Override
	public void setName(String name) {
		this.name =name;
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
	@XmlElement(name = "desc")
	public String getDescription() {
		return this.description;
	}
	@Override
	public void setDescription(String description) {
		this.description = description; 
		
	}

	@Override
	@XmlElement(name = "fromEntity")
	public IEntity getEntity() {
		return entity;
	}

	@Override
	public void setEntity(IEntity entity) {
		this.entity = entity;
	}



	@Override
	public List<IContact> getContacts() {
		return contacts;
	}

	@Override
	public void setContacts(List<IContact> contacts) {
		this.contacts = contacts;
	}


	
	
}
