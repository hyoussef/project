package data.model.def;

import javax.xml.bind.annotation.XmlElement;

public interface IEntity {

	@XmlElement(name = "name")
	public abstract String getName();

	public abstract void setName(String name);

	@XmlElement(name = "id")
	public abstract long getId();

	public abstract void setId(long id);
	
	@XmlElement(name = "fromCompany")
	ICompany getCompany();

	void setCompany(ICompany company);

}